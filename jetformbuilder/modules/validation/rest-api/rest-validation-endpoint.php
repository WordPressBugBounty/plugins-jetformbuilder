<?php


namespace JFB_Modules\Validation\Rest_Api;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use Jet_Form_Builder\Request\Request_Tools;
use JFB_Components\Rest_Api;
use JFB_Modules\Validation\Module;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Validation_Endpoint extends Rest_Api\Rest_Api_Endpoint_Base {

	const FIELD_KEY      = '_jfb_validation_path';
	const RULE_INDEX_KEY = '_jfb_validation_rule_index';

	public static function get_rest_base() {
		return 'validate-field';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 * @throws Repository_Exception
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_body_params();

		// to prevent custom and inner validation & sanitize
		remove_all_actions( 'jet-form-builder/validate-field' );

		try {
			$parser = $this->get_parser( $request );
		} catch ( Silence_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Unresolved parser for field', 'jet-form-builder' ),
				),
				400
			);
		}

		$validation = $parser->get_setting( 'validation' );
		$ssr_attrs  = Array_Tools::get(
			$validation,
			array( 'rules', $body[ self::RULE_INDEX_KEY ] )
		);

		if ( null === $parser->get_value() || '' === $parser->get_value() || empty( $ssr_attrs['value'] ) ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Field value or callback is empty', 'jet-form-builder' ),
				),
				400
			);
		}

		/** @var Module $module */
		$module   = jet_form_builder()->module( 'validation' );
		$ssr_rule = $module->get_rules()->get_ssr();

		$ssr_rule->set_settings( $ssr_attrs );

		$ssr_rule->validate_field( $parser );

		return new \WP_REST_Response(
			array(
				'result' => empty( $parser->get_errors() ),
			),
			200
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return Field_Data_Parser
	 * @throws Plain_Value_Exception
	 * @throws Repository_Exception
	 */
	protected function get_parser( \WP_REST_Request $request ): Field_Data_Parser {
		$body    = $request->get_body_params();
		$path    = $body[ self::FIELD_KEY ] ?? false;
		$form_id = $body[ jet_fb_handler()->form_key ] ?? false;

		jet_fb_handler()->set_form_id( $form_id );

		jet_fb_context()->set_request( $body );
		jet_fb_context()->set_files( Request_Tools::get_files( $request->get_file_params() ) );

		// set fields with request
		jet_fb_context()->apply(
			Block_Helper::get_blocks_by_post( $form_id )
		);

		return jet_fb_context()->resolve_parser( $path );
	}
}

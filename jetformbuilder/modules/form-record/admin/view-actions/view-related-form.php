<?php


namespace JFB_Modules\Form_Record\Admin\View_Actions;

use Jet_Form_Builder\Admin\Table_Views\Actions\Link_Single_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class View_Related_Form extends Link_Single_Action {

	/** @var \WP_Post */
	private $form;

	public function get_slug(): string {
		return 'edit_form';
	}

	public function get_label(): string {
		return __( 'Edit Form', 'jet-form-builder' );
	}

	public function get_href( array $record ): string {
		return get_edit_post_link( $this->form, false ) ?: '';
	}

	public function show_in_header(): bool {
		return false;
	}

	public function show_in_row( array $record ): bool {
		$this->form = get_post( $record['form_id'] ?? 0 );

		if ( ! ( $this->form instanceof \WP_Post ) ) {
			return false;
		}

		return ! empty( $this->get_href( $record ) );
	}
}

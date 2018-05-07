// Register the following element definition with the builder
Builder.types.toggle = {

	// Label in the interface
	title: 'Toggle',

	// Icon in `New element` dialog
	icon: '{+$theme}_child/builder/toggle/icon.svg',

	// Icon in builder overview
	iconSmall: '{+$theme}_child/builder/toggle/icon-small.svg',

	// Show in `New element` dialog
	element: true,

	// Includes required functionality from the Builder
	mixins: [Builder.entity, Builder.element, Builder.container],

	// A function that returns a JS object which is then used to render the interface
	// Params are the currently stored parameters for this element
	params: function(params) {

		// Just for easier access later on
		var element = params.element;

		return {

			width: 600,

			// Multiple tabs to group input fields
			tabs: [

				// The 1st tab usually contains all fields to fill in the actual content
				{
					'title': 'Content',
					'fields': {

						// <field_name>: <field_definition>
						field_btn_label: {
							label: 'Button Label',
							description: 'Label that will be displayed on the button.',
							type: 'text'
						},

						field_icon: {
							label: 'Button Icon',
							description: 'Pick an optional icon.',
							type: 'icon'
						},

						field_content: {
							label: 'Content',
							description: 'Content that will be displayed before the toggle button.',
							type: 'editor',
							attrs: {
								rows: 10,
								placeholder: 'Enter text...'
							}
						},

						field_content2: {
							label: 'Content 2',
							description: 'Content that will be displayed after the toggle button.',
							type: 'editor',
							attrs: {
								rows: 10,
								placeholder: 'Enter text...'
							}
						}

					}
				},

				// The 2nd tab usually includes fields with settings HOW to display the content
				{
					title: 'Settings',
					fields: {

						field_btn_style: {
							label: 'Button Style',
							description: 'Set the button style.',
							type: 'select',
							options: {
								'Default': 'uk-button-default',
								'Primary': 'uk-button-primary',
								'Secondary': 'uk-button-secondary',
								'Danger': 'uk-button-danger',
								'Text': 'uk-button-text',
								'Link': 'uk-button-link'
							}
						},

						field_btn_size: {
							label: 'Button Size',
							description: 'Set the button size.',
							type: 'select',
							options: {
								'Default': '',
								'Small': 'uk-button-small',
								'Large': 'uk-button-large'
							}
						},

						field_icon_align: {
							label: 'Icon Align',
							description: 'Choose the icon position.',
							type: 'select',
							options: {
								'Left': 'left',
								'Right': 'right'
							}
						},

						field_mode: {
							label: 'Mode',
							description: 'Set the trigger behaviour mode.',
							type: 'select',
							options: {
								'Click': 'click',
								'Hover': 'hover',
								'Click and Hover': 'click, hover',
								'Media': 'media'
							}
						},

						field_media: {
							label: 'Media',
							description: 'Set the breakpoint for the media mode.',
							type: 'select',
							options: {
								'Always': 'false',
								'Small': '@s',
								'Medium': '@m',
								'Large': '@l',
								'X-Large': '@xl'
							},
							enable: ({field_mode}) => field_mode == 'media'
						},

						field_hidden: {
							label: 'Show/Hide',
							description: 'Set the second content to be hidden on load. The toggle event will then show the target instead of hiding it.',
							type: 'checkbox',
							text: 'Hide Content 2'
						},

						field_cls: {
							label: 'Cls',
							description: 'Set the class that is being toggled.',
							type: 'text',
							enable: ({field_hidden}) => !field_hidden
						},

						field_animation: {
							label: 'Animation',
							description: 'Set the toggle animation.',
							type: 'select',
							options: {
								'None': 'false',
								'Fade': 'uk-animation-fade',
								'Scale Up': 'uk-animation-scale-up',
								'Scale Down': 'uk-animation-scale-down',
								'Slide Top': 'uk-animation-slide-top',
								'Slide Bottom': 'uk-animation-slide-bottom',
								'Slide Left': 'uk-animation-slide-left',
								'Slide Right': 'uk-animation-slide-right',
								'Slide Top Small': 'uk-animation-slide-top-small',
								'Slide Bottom Small': 'uk-animation-slide-bottom-small',
								'Slide Left Small': 'uk-animation-slide-left-small',
								'Slide Right Small': 'uk-animation-slide-right-small',
								'Slide Top Medium': 'uk-animation-slide-top-medium',
								'Slide Bottom Medium': 'uk-animation-slide-bottom-medium',
								'Slide Left Medium': 'uk-animation-slide-left-medium',
								'Slide Right Medium': 'uk-animation-slide-right-medium',
								'Ken Burns': 'uk-animation-kenburns',
								'Shake': 'uk-animation-shake'
							}
						},

						field_duration: {
							label: 'Duration',
							description: 'Set the animation duration in ms.',
							type: 'number'
						},

						_general: {
							label: 'General',
							type: 'group',
							fields: {
								text_align: element.text_align,
								text_align_breakpoint: element.text_align_breakpoint,
								text_align_justify_fallback: element.text_align_justify_fallback,
								maxwidth: element.maxwidth,
								maxwidth_align: element.maxwidth_align,
								maxwidth_breakpoint: element.maxwidth_breakpoint,
								margin: element.margin,
								margin_remove_top: element.margin_remove_top,
								margin_remove_bottom: element.margin_remove_bottom,
								animation: element.animation,
								_parallax_button: element._parallax_button,
								visibility: element.visibility
							}
						}

					}
				},

				// The 3rd tab usually contains the same fields that are rendered on the element container
				{
					title: 'Advanced',
					fields: {

						// Using fields predefined in `yootheme/vendor/yootheme/theme/modules/builder/app/elements/params.js`
						name: element.name,
						id: element.id,
						class: element.cls,
						css: {
							label: 'CSS',
							description: 'Enter your own custom CSS. The following selectors will be prefixed automatically for this element: <code>.el-element</code>',
							type: 'editor',
							editor: 'code',
							mode: 'css',
							attrs: {
								debounce: 500
							}
						}

					}
				}
			]
		}
	},

	// Set default values for fields
	data: function() {
		return {
			// <field_name>: <default_value>
			props: {
				field_btn_label: 'Toggle',
				field_content: 'Lorem ipsum dolor sit amet',
				field_content2: 'Hello, world!',
				field_btn_style: 'uk-button-default',
				field_btn_size: '',
				field_icon_align: 'left',
				field_mode: 'click',
				field_hidden: false,
				field_cls: '',
				field_media: 'false',
				field_animation: 'false',
				field_duration: 200
			}
		};
	}

};
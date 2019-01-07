<?php

return [

	// Module name
	'name' => 'forrestkirby/toggle',

	// How this element is referenced inside the builder
	'builder' => 'toggle',

	// Render this element on the website
	'render' => function ($element) {
		return $this->app->view->render("{$this->path}/template.php", ['element' => $element]);
	},

	'events' => [

		'builder.init' => function ($elements, $builder) {
			$elements->set('toggle', json_decode(file_get_contents("{$this->path}/element.json"), true));
		}

	],

	'config' => [

		'element' => true

	]

];

<?php

return [

	// Module name
	'name' => 'yootheme/toggle',

	// How this element is referenced inside the builder
	'builder' => 'toggle',

	// Render this element on the website
	'render' => function ($element) {
		return $this->app->view->render("{$this->path}/template.php", ['element' => $element]);
	},

	'events' => [

		'theme.admin' => function () {
			// Load the JavaScript that creates the elements settings in the builder
			$this->app->scripts->add('builder-toggle', "{$this->path}/toggle.js", 'customizer-builder');
	}

	],

	'config' => [

		'element' => true

	]

];

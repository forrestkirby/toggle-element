<?php

$id    = $element['id'];
$class = $element['class'];
$attrs = $element['attrs'];

$uniqid = uniqid('toggle-');
$ishidden = $element['field_hidden'] ? 'hidden' : '' ;
$cls = ( $element['field_hidden'] || $element['field_cls'] == '' ) ? 'false' : $element['field_cls'];

?>

<div<?= $this->attrs(compact('id', 'class'), $attrs) ?>>

	<div class="uk-margin"><?= $element['field_content'] ?></div>
	<div class="uk-margin">
		<button class="uk-button <?= $element['field_btn_style'] ?> <?= $element['field_btn_size'] ?>" type="button" uk-toggle="target: #<?= $uniqid ?>; mode: <?= $element['field_mode'] ?>; cls: <?= $cls; ?>; media: <?= $element['field_media'] ?>; animation: <?= $element['field_animation'] ?>; duration: <?= $element['field_duration'] ?>">

			<?php if ($element['field_icon_align'] == 'left') : ?>
				<span uk-icon="<?= $element['field_icon'] ?>"></span>
			<?php endif ?>

			<span class="uk-text-middle"><?= $element['field_btn_label'] ?></span>

			<?php if ($element['field_icon_align'] == 'right') : ?>
				<span uk-icon="<?= $element['field_icon'] ?>"></span>
			<?php endif ?>

			</button>
	</div>
	<div id="<?= $uniqid; ?>" class="uk-margin" <?= $ishidden; ?>><?= $element['field_content2'] ?></div>

</div>
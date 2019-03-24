<?php

$el = $this->el('div', [

	//

]);

$uniqid = uniqid('toggle-');
$ishidden = $props['field_hidden'] ? 'hidden' : '' ;
$cls = ( $props['field_hidden'] || $props['field_cls'] == '' ) ? 'false' : $props['field_cls'];

?>

<?= $el($props, $attrs) ?>

	<div class="uk-margin"><?= $props['field_content'] ?></div>
	<div class="uk-margin">
		<button class="uk-button <?= $props['field_btn_style'] ?> <?= $props['field_btn_size'] ?>" type="button" uk-toggle="target: #<?= $uniqid ?>; mode: <?= $props['field_mode'] ?>; cls: <?= $cls; ?>; media: <?= $props['field_media'] ?>; animation: <?= $props['field_animation'] ?>; duration: <?= $props['field_duration'] ?>">

			<?php if ($props['field_icon_align'] == 'left') : ?>
				<span uk-icon="<?= $props['field_icon'] ?>"></span>
			<?php endif ?>

			<span class="uk-text-middle"><?= $props['field_btn_label'] ?></span>

			<?php if ($props['field_icon_align'] == 'right') : ?>
				<span uk-icon="<?= $props['field_icon'] ?>"></span>
			<?php endif ?>

			</button>
	</div>
	<div id="<?= $uniqid; ?>" class="uk-margin" <?= $ishidden; ?>><?= $props['field_content2'] ?></div>

</div>
<?php

$el = $this->el('div', [

	//

]);

$uniqid = uniqid('toggle-');
$ishidden = $props['hidden'] ? 'hidden' : '' ;
$cls = ( $props['hidden'] || $props['cls'] == '' ) ? 'false' : $props['cls'];

?>

<?= $el($props, $attrs) ?>

	<div class="uk-margin"><?= $props['content'] ?></div>
	<div class="uk-margin">
		<button class="uk-button <?= $props['btn_style'] ?> <?= $props['btn_size'] ?>" type="button" uk-toggle="target: #<?= $uniqid ?>; mode: <?= $props['mode'] ?>; cls: <?= $cls; ?>; media: <?= $props['media'] ?>; animation: <?= $props['animation'] ?>; duration: <?= $props['duration'] ?>">

			<?php if ($props['icon_align'] == 'left') : ?>
				<span uk-icon="<?= $props['icon'] ?>"></span>
			<?php endif ?>

			<span class="uk-text-middle"><?= $props['btn_label'] ?></span>

			<?php if ($props['icon_align'] == 'right') : ?>
				<span uk-icon="<?= $props['icon'] ?>"></span>
			<?php endif ?>

			</button>
	</div>
	<div id="<?= $uniqid; ?>" class="uk-margin" <?= $ishidden; ?>><?= $props['content2'] ?></div>

</div>

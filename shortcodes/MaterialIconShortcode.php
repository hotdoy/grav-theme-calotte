<?php
namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class MaterialIconShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('mi', function(ShortcodeInterface $sc) {
        	$mi = $sc->getParameter('mi', $this->getBbCode($sc));
            $class = $sc->getParameter('class');
            $style = $sc->getParameter('style');

			$class_output = ' class="material-icons material-icons--sc ' . $class  . '"';
            $style_output = $style ? ' style="' . $style . '"' : '';

            return '<span' . $class_output . $style_output . '>' . $mi . '</span>';
        });
    }
}

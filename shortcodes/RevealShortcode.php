<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class RevealShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('reveal', function(ShortcodeInterface $sc) {
        	$reveal_class = $sc->getParameter('reveal', $this->getBbCode($sc));
        	$class = $sc->getParameter('class');
            return '<div class="'. $class .'" data-reveal="' . $reveal_class . '">'.$sc->getContent().'</div>';
        });
    }
}

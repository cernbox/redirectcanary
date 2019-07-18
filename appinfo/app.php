<?php

namespace OCA\RedirectCanary\AppInfo;

use OCP\AppFramework\App;

$app = new App('redirectcanary');

\OCP\Util::addScript('redirectcanary', 'app');

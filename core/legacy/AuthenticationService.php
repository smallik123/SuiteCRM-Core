<?php

namespace SuiteCRM\Core\Legacy;

use SuiteCRM\Core\Base\Module\Service\ServiceFactoryInterface;

use SuiteCRM\Core\Legacy\Authentication;

/**
 * Class AuthenticationService
 * @package SuiteCRM\Core\Legacy
 */
class AuthenticationService implements ServiceFactoryInterface
{
    /**
     * @return string
     */
    public function getName(): string
    {
        return 'users.authentication';
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return 'This service will deal with legacy authentication';
    }

    /**
     * @return mixed
     */
    public function createService()
    {
        return new Authentication();
    }
}

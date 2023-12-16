<?php

namespace App\Enums;

enum Weekday: int
{
    case Saturday = 0;
    case Sunday = 1;
    case Monday = 2;
    case Tuesday = 3;
    case Wednesday = 4;
    case Thursday = 5;
    case Friday = 6;

    public function getDescription(): string
    {
        switch ($this->value) {
            case self::Saturday->value:
                return 'شنبه';
            case self::Sunday->value:
                return 'یک‌شنبه';
            case self::Monday->value:
                return 'دوشنبه';
            case self::Tuesday->value:
                return 'سه‌شنبه';
            case self::Wednesday->value:
                return 'چهارشنبه';
            case self::Thursday->value:
                return 'پنج‌شنبه';
            case self::Friday->value:
                return 'جمعه';
            default:
                return '';
        }
    }
}

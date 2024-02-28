<?php

namespace App\Enums;

enum Weekday: int
{
    case Saturday = 1;
    case Sunday = 2;
    case Monday = 3;
    case Tuesday = 4;
    case Wednesday = 5;
    case Thursday = 6;
    case Friday = 7;

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

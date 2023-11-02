<?php

namespace App\Enums;

enum BloodGroup: string
{
    case OMinus = 'O-';
    case OPlus = 'O+';
    case AMinus = 'A-';
    case APlus = 'A+';
    case BMinus = 'B-';
    case BPlus = 'B+';
    case ABMinus = 'AB-';
    case ABPlus = 'AB+';
}

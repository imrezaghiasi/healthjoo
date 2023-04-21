<?php

namespace App\Services\Interfaces;

use Symfony\Component\HttpFoundation\File\UploadedFile;

interface ImageUploaderServiceInterface
{
    public function storeImage(UploadedFile $file,$directory);
    public function updateImage(UploadedFile $file,$model,$directory);
}

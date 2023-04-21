<?php

namespace App\Services;

use App\Services\Interfaces\ImageUploaderServiceInterface;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ImageUploaderService implements ImageUploaderServiceInterface
{

    public function storeImage(UploadedFile $file, $directory)
    {
        $imageName = rand(1, 1000000) . '.' . $file->getClientOriginalName();
        return $file->storeAs($directory, $imageName);
    }

    public function updateImage(UploadedFile $file, $model, $directory): void
    {
        if ($model->photo_path) {
            Storage::disk('local')->delete($model->photo_path);
        }
        $model->photo_path = $this->storeImage($file, $directory);
    }
}

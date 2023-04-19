<?php

namespace App\Repositories\Interfaces;

interface JobRepositoryInterface
{
    public function getAllWithTrashed();
    public function getAllLatest();
    public function getAllPaginate($count);
}

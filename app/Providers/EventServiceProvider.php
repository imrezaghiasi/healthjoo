<?php

namespace App\Providers;

use App\Models\Hospitalization;
use App\Models\Room;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        parent::boot();

        Hospitalization::updated(function ($hospitalization) {
            if ($hospitalization->end_time !== null && $hospitalization->date_of_hospitalization <= Carbon::now() && $hospitalization->end_time < Carbon::now()) {
                $room = Room::find($hospitalization->room_id);
                if ($room) {
                    $room->update(['available' => true]);
                }
            }
        });
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}

<?php

namespace App\Http\Controllers\Administrations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use OwenIt\Auditing\Models\Audit;
use Inertia\Inertia;

class AuditLogsController extends Controller
{
    public function index(){
        $audit_logs = Audit::with('user')->orderBy('created_at', 'DESC')->paginate(25);

        $data = $audit_logs->map(function($item){
            return collect([
                'id' => $item->id,
                'event' => $item->event,
                'action' => $this->modelInReadableFormat($item->auditable_type) . ' ' . $item->event . ' by ' . $item->user->name,
                'old_values' => $item->old_values,
                'new_values' => $item->new_values,
                'ip_address' => $item->ip_address,
                'user_agent' => $item->user_agent,
                'created_at' => $item->created_at->format('d M Y H:i'),
                'updated_at' => $item->updated_at->format('d M Y H:i'),
                'user' => $item->user
            ]);
        });

        return Inertia::render('Administrations/AuditLogs', [
            'audit_logs' => $data
        ]);
    }

    private function modelInReadableFormat($namespace){
        $segments = explode('\\', $namespace); // Store the exploded array in a variable
        $lastSegment = array_pop($segments); // Pass the variable to array_pop()

        // Step 2: Separate the last segment into words whenever there is an uppercase letter
        $words = preg_split('/(?=[A-Z])/', $lastSegment, -1, PREG_SPLIT_NO_EMPTY); 

        // Step 3: Join the separated words into a readable format (optional)
        $formattedWords = implode(' ', $words); // Returns "Coverage Level"

        return $formattedWords;
    }
}

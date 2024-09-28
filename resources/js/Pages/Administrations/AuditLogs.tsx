import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import useRoute from "@/Hooks/useRoute";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const AuditLogs = ({audit_logs}: any) => {
    const route = useRoute();

    const headers = [
        {id: 'id', label: 'ID'},
        {id: 'event', label: 'Event'},
        {id: 'action', label: 'Action'},
        {id: 'actor', label: 'Actor'},
        {id: 'old_values', label: 'Old Values'},
        {id: 'new_values', label: 'New Values'},
        {id: 'action_time', label: 'Action Time'},
    ];

    return (
        <MainLayout title="User Management">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <h4>Audit Logs</h4>
                </div>
            } />

            <TopHeaderSection title='Audit Logs' hideAddBtn={true} />
            

            <Table
                headers={headers}
                rows={audit_logs.map((item:any) => (
                    {
                        id: item.id,
                        event: <span className="capitalize">{item.event}</span>,
                        action: item.action,
                        actor: item.user.name,
                        old_values: JSON.stringify(item.old_values),
                        new_values: JSON.stringify(item.new_values),
                        action_time: item.created_at
                    }
                ))}
            />
        </MainLayout>
    )
}

export default AuditLogs;
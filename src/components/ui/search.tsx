import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Text } from 'lucide-react';

const search = () => {
    return (
        <div className="flex justify-end w-full^^ max-w-sm items-center space-x-2 py-4">
            <div className="relative flex-1 ">
                <Input type="search" placeholder="search..." className="pl-4 pr-10" />
                <Search className="absolute inset-y-2 right-0 pr-3 flex items-center text-gray-400 " />
            </div>
            <Text />
        </div>
    )
}

export default search
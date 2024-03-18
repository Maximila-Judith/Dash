import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Ban, FilePenLine, Home, SearchX, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from 'react';

const section = () => {
    return (
        <div>
            <Card className="bg-neutral-650">
                <Card className="bg-neutral-800 w-96 m-6 h-25">
                    <div className="">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between">
                                    <div className="flex flex-row items-center space-x-6">
                                        <Home />
                                        Project
                                    </div>
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                </div>
                            </CardTitle>
                            <CardDescription>Title</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between">
                            <div className="flex flex-row items-center space-x-6">
                                <FilePenLine />
                                <SearchX />
                                <Ban />
                                <Trash2 />
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <Badge variant="outline">Upgrate</Badge>
                                <Badge variant="outline">13 Juin 2024</Badge>
                            </div>
                        </CardContent>
                    </div>
                </Card>

                <Card className="bg-neutral-800 w-96 m-6 h-25">
                    <div className="">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between">
                                    <div className="flex flex-row items-center space-x-6">
                                        <Home />
                                        Project
                                    </div>
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                </div>
                            </CardTitle>
                            <CardDescription>Title</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between">
                            <div className="flex flex-row items-center space-x-6">
                                <FilePenLine />
                                <SearchX />
                                <Ban />
                                <Trash2 />
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <Badge variant="outline">Upgrate</Badge>
                                <Badge variant="outline">13 Juin 2024</Badge>
                            </div>
                        </CardContent>
                    </div>
                </Card>

                <Card className="bg-neutral-800 w-96 m-6 h-25">
                    <div className="">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex justify-between">
                                    <div className="flex flex-row items-center space-x-6">
                                        <Home />
                                        Project
                                    </div>
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                </div>
                            </CardTitle>
                            <CardDescription>Title</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between">
                            <div className="flex flex-row items-center space-x-6">
                                <FilePenLine />
                                <SearchX />
                                <Ban />
                                <Trash2 />
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <Badge variant="outline">Upgrate</Badge>
                                <Badge variant="outline">13 Juin 2024</Badge>
                            </div>
                        </CardContent>
                    </div>
                </Card>

            </Card>
        </div>
    )
}

export default section

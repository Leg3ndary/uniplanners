import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { FaClipboardList } from "react-icons/fa";

export default function DashboardNavigation({ active }: { active: string }) {
    const { data: session } = useSession();
    const userImage = session?.user?.picture ?? "";

    return (
        <nav className="flex items-center flex-col h-[calc(100svh-2rem)] w-64 m-4 bg-white drop-shadow-lg rounded-xl top-0 fixed">
            <h3 className="text-center font-semibold text-3xl my-2 mt-4">
                UniPlanner
            </h3>
            <div className="h-[1px] w-10/12 bg-slate-200 rounded-full my-2" />
            <div className="flex flex-col w-full px-4">
                <Link
                    href="/dashboard"
                    className={`flex items-center p-2 my-2 rounded-xl px-4 transition-all duration-400 ease-in-out ${
                        active === "dashboard"
                            ? "font-semibold bg-cyan-50/95 hover:bg-cyan-100/95"
                            : "hover:bg-cyan-50/95"
                    }`}
                >
                    <RxDashboard className="text-xl mr-4 text-cyan-500" />
                    Dashboard
                </Link>
                <Link
                    href="/applications"
                    className={`flex items-center p-2 rounded-xl px-4 transition-all duration-400 ease-in-out ${
                        active === "applications"
                            ? "font-semibold bg-purple-100/95 hover:bg-purple-200/95"
                            : "hover:bg-purple-100/95"
                    }`}
                >
                    <FaClipboardList className="text-xl mr-4 text-purple-500" />
                    Applications
                </Link>
            </div>
            <div className="h-[1px] w-10/12 bg-slate-200 rounded-full mt-auto mb-4" />
            <div className="flex items-center justify-center w-full mb-4">
                <Image
                    src={userImage}
                    alt="User Image"
                    width={30}
                    height={30}
                    className="rounded-full -ml-4 mr-4"
                    unoptimized
                />
                <p className="">{session?.user?.name}</p>
            </div>
        </nav>
    );
}

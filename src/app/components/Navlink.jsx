'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import { Suspense } from "react";
import Loading from "../loading";

const NavlinkPage = ({href,children}) => {
    const pathname=usePathname()
const isActive=href===pathname
return <Link href={href} className={isActive ? "underline" : ""}>{children}</Link>
};

const Navlink=({href,children})=>{
    return <Suspense fallback={<Loading></Loading>}>
        <NavlinkPage href={href}>{children}</NavlinkPage>
    </Suspense>
}

export default Navlink;
import { Menu, Sidebar } from "lucide-react";

import{
    Sheet,
    SheetContent,
    SheetTrigger,
    // SheetTitle 
} from "@/components/ui/sheet";

export const MobileSidebar =() =>{
    return(
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
               <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
            {/* <SheetTitle className="sr-only">Mobile Sidebar</SheetTitle> 'sr-only' hides it visually but keeps it for screen readers
                 */}
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}
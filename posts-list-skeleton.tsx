
  import { Skeleton } from "@/components/ui/skeleton";

 export function PostListSkeleton(){
    return(
        <div className="space-y-2 p-2">        
    {Array.from({length:3}).map((_, index)=>(
        <Skeleton
        key={index}
        className="h-32 w-full"
        />
    ))}
    </div>
    );
 }

 
 //T-T -3-
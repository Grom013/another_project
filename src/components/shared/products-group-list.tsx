import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ 
    title,
    items, 
    className = 'products-group-list',
    listClassName = 'products-group-list__list',
    categoryId
 }) => {
    return (
        <div className={className}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/>
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((item, index) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.items[0].price}
                    />
                ))}
            </div>
        </div>
    )
}
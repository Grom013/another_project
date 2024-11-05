import { Container, TopBar, Title, Filters, ProductsGroupList } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar/>
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters/>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" 
                items={[
                  {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: '/pizza.jpg',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: '/pizza.jpg',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: '/pizza.jpg',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: '/pizza.jpg',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: '/pizza.jpg',
                  price: 250,
                  items: [{price: 250}]
                },
              ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

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
              <ProductsGroupList 
                title="Пиццы" 
                categoryId={1}
                items={[
                  {
                  id: 1,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 2,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 3,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 4,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 5,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
              ]}
                
              />
               <ProductsGroupList 
                title="Комбо" 
                categoryId={2}
                items={[
                  {
                  id: 10,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 20,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 30,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 40,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
                {
                  id: 50,
                  name: 'Мясная пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                  price: 250,
                  items: [{price: 250}]
                },
              ]}
                
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

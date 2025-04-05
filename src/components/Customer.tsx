
import  ourCustomerData  from '@/data/customer.json'
import { CustomerCard } from './CustomerCard'

export const Customer = () => {
  return (
    <section id="our-customer" className='relative'>
      <div className="absolute top-5 left-[130px] w-[100px] h-[100px] rounded-br-[50%] rounded-tl-[50%] bg-forest-green " />
      <div className="absolute top-15 left-[40px] w-[80px] h-[80px] rounded-tr-[50%] rounded-bl-[50%] bg-mist-green " />
      <h1 className="flex text-forest-green font-libre xl:text-[60px] font-semibold xl:p-[60px] xl:pr-[50px] justify-end">
        Our Customer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 xl:p-[50px] ">
        {ourCustomerData.map((item) => (
          <div key={item.id} className="flex gap-2 shadow-xl">
            <CustomerCard {...{ ...item }} />
          </div>
        ))}
      </div>
    </section>
  );
}

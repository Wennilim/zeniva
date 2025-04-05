import ourTeamData from '@/data/team.json'
export const Team = () => {
  return (
    <section id="our-team" className='w-[80%]'>
      <h1 className="flex justify-center self-center text-forest-green font-libre xl:text-[60px] font-semibold xl:pt-[60px] xl:pl-[50px]">
        Meet the Team
      </h1>
      <div className="flex flex-wrap justify-center gap-3 p-4 ">
        {ourTeamData.map((staff) => {
          return (
            <div key={staff.id} className="flex flex-col items-center gap-2 p-4">
              <img
                src={staff.img}
                alt={staff.name}
                className="self-center w-[150px] h-[150px] object-cover rounded-full shadow-lg"
              />
              <p className='font-geologica font-bold text-forest-green uppercase'>{staff.name}</p>
              <span className='font-geologica text-[14px] text-mist-green'>{staff.role}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

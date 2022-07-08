
interface BannerProps {
  href: string,
  img: string,
  title: string,
  subtitle: string
  imgPos?: "center" | "top" | "bottom"
}

const Banner = (props: BannerProps) => {

    let imgClass = 'absolute w-full h-full object-cover object-top z-10'

    if (props.imgPos === "bottom") imgClass += ' object-bottom';
    if (props.imgPos === "top") imgClass += ' object-top';
    if (props.imgPos === "center") imgClass += ' object-center';

    return (
      <a href={props.href}>
      <section className='relative h-36 overflow-hidden rounded shadow group'>
        <img className={imgClass} src={props.img} alt='Banner Image' />
        <div className='absolute transition-colors w-full h-full bg-gradient-to-r from-black to-transparent z-20 group-hover:from-gray-900 '/>
        <section className='flex absolute w-full h-full z-30 flex-col text-white pl-6 justify-center'>
          <h1 className='text-2xl font-thin transition-all group-hover:ml-4'>{props.title}</h1>
          <p className='text-lg font-thin transition-all group-hover:ml-4'>{props.subtitle}</p>
        </section>
      </section>
      </a>
    )
}

const Credits = () => {
    return (
        <>
            <div className='p-4 grid lg:grid-cols-3 gap-4 lg:gap-1'>
              <Banner 
                href="https://atlasacademy.io" 
                img="https://atlasacademy.io/content/images/size/w2000/2020/08/back29500.png" 
                subtitle="Fate Grand Order Datamining"
                title="Atlas Academy"
                imgPos="center"
              />
              <Banner 
                href="https://en.reactjs.org/" 
                img="https://i.imgur.com/r2GEJDz.png" 
                title="React"
                subtitle="A JavaScript library for building user interfaces"
                imgPos="bottom"
              />
              <Banner 
                href="https://mui.com/material-ui/getting-started/overview/" 
                img="https://i.imgur.com/zcX6xGE.png" 
                subtitle="React component library"
                title="Material UI"
                imgPos="center"
              />
            </div>
           
        </>
    )
}

export default Credits

function Tempo(props) {
  const dynamicDate = newDate();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  )
  export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
      props: {
        staticDateString
      },
      revalidate: 1  // Permite uma entrega cacheada da página ao usuário até que novo request seja feito
    }
  }
}

export default Tempo;
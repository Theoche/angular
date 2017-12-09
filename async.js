function addition(nombre ) {
  const nb = Number(nombre)
  return new Promise((fullfil, reject) => {
  if (isNaN(nb)) {
    setTimeout( () => {reject('not a number !')}, 2000)
  } else {
    setTimeout( () =>  {fullfil(nb + 12)}, 2000)
  }
  })
}


async function main() {
  try {
    let compteur = await addition('12')
    console.log(compteur)
    compteur = await addition(compteur)
    console.log (compteur)
  }catch(err) {
    console.error(err)
  }
}

main()
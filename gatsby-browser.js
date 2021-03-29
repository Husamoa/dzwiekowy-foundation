export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Istnieje nowsza wersja strony Tenis Stołowy Dźwiękowy ` +
      `Czy chesz odświeżyć stronę, żeby zobaczyć najnowszą wersję?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
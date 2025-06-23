// Fonction pour formater la date
const formatDateToFR = (date) => {
  const isoDate = date
  const dateFr = new Date(isoDate)

  const formattedDate = dateFr.toLocaleDateString('fr-FR')
  return formattedDate
}

// Fonction pour le séparateur de millier
const formatNumberToFR = (prix) => {
  const number = prix
  const formatted = new Intl.NumberFormat('fr-FR').format(number)
  return formatted
}

export { formatDateToFR, formatNumberToFR }

export function formatUrl(name) {
  return name
    ?.toLowerCase() // Converte para minúsculas
    .normalize('NFD') // Separa acentos das letras
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]/g, '') // Remove caracteres que não sejam letras ou números
    .replace(/\s+/g, ''); // Remove espaços
}



//Atualizar galeria 
export const updateGallery = (index) => {
    const offset = -index * 15;
    return { transform: `translateX(${offset}%)` }
 
};
// Botão previous seta o index em sentido contrario a next
export const previous = (index, setIndex, images) => {
    setIndex(index > 0 ? index - 1 : images.length - 1);
};

// Botão Next seta o index 
export const next = (index, setIndex, images) => {
    
    setIndex(index < images.length - 1 ? index + 1 : 0);
};

updateGallery() 
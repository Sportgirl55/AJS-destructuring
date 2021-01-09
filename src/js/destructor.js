
export default function destructor({ special }) {
  return special.map((elem) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = elem;
    return {
      id, name, description, icon,
    };
  });
}

interface ListItemProps {
  title: string;
  price: string;
  description: string;
  imgSrc: string;
}

export default function ListItem(props: ListItemProps) {
  return (
    <div>
      <img alt="Item Presentation Picture" src={props.imgSrc} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

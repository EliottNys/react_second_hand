interface ListItemProps {
  title: string;
  price: string;
  description: string;
  img_src: string;
}

export default function ListItem(props: ListItemProps) {
  return (
    <div>
      <img alt="Item Presentation Picture" src={props.img_src} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PublicProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PublicProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
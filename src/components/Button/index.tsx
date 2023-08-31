interface props {
  contentText: string;
  link: string;
}

export function Button({ contentText, link }: props) {
  return (
    <a href={link}>
      <button className="bg-verde-600 w-full h-full rounded-3xl">
        <span className="text-button-500 font-inter text-sm font-bold">
          {contentText}
        </span>
      </button>
    </a>
  );
}

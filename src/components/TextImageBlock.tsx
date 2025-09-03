type Props = {
  title: string;
  text: React.ReactNode;
  image: string;
  reverse?: boolean;
  background?: string; // Optional: for alternating backgrounds like 'w3-light-grey'
};

const TextImageBlock: React.FC<Props> = ({
  title,
  text,
  image,
  reverse = false,
  background = "",
}) => {
  return (
    <div className={`w3-row w3-padding-32 w3-margin-bottom ${background}`}>
      {reverse ? (
        <>
          <div className="w3-half w3-padding-large">
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                className="zoom-image w3-image w3-round-large"
                style={{ maxHeight: 300, objectFit: "cover" }}
              />
            </a>
          </div>
          <div className="w3-half w3-padding-large">
            <h2>{title}</h2>
            {text}
          </div>
        </>
      ) : (
        <>
          <div className="w3-half w3-padding-large">
            <h2>{title}</h2>
            {text}
          </div>
          <div className="w3-half w3-padding-large">
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                className="zoom-image w3-image w3-round-large"
                style={{ maxHeight: 300, objectFit: "cover" }}
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default TextImageBlock;

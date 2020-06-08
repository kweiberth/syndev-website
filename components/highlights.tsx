import { boxShadow, maxPageWidth } from 'utils/styles';
export default function Publications() {
  return (
    <div
      css={{
        maxWidth: maxPageWidth,
        margin: 'auto',
        padding: 12,
        paddingBottom: 24,
        '> a': { marginBottom: 12 },
        '> a:last-of-type': { marginBottom: 0 },
      }}
    >
      <a
        href="https://pubs.acs.org/doi/10.1021/acs.oprd.8b00009"
        target="_blank"
        rel="noreferrer"
        css={{
          display: 'block',
          overflow: 'hidden',
          padding: 12,
          borderRadius: 6,
          boxShadow,
        }}
      >
        <img src="/article1.png" width="100%" />
      </a>
      <a
        href="https://doi.org/10.1039/C8GC01276H"
        target="_blank"
        rel="noreferrer"
        css={{
          display: 'block',
          overflow: 'hidden',
          padding: 12,
          borderRadius: 6,
          boxShadow,
        }}
      >
        <img src="/article2.png" width="100%" />
      </a>
    </div>
  );
}

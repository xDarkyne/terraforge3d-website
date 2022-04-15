import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IDownload } from 'values';

interface IDownloadCardProps {
  download: IDownload;
}

export const DownloadCard: FunctionComponent<IDownloadCardProps> = ({
  download,
}) => {
  return (
    <li>
      <h3>{download.version}</h3>
      <Link href={download.url}>download</Link>
      <footer>
        <ul>
          <li>{download.architecture}</li>
          {download.type !== '' && <li>{download.type}</li>}
        </ul>
      </footer>
    </li>
  );
};

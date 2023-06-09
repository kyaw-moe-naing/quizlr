import Svg, { Path } from 'react-native-svg';
import Icon from '../../src/data/icon';

export const HomeIcon = (props: Icon) => {
  return (
    <Svg width="48" height="21" viewBox="0 0 48 21" fill="none">
      <Path d="M24.5556 1.21096C24.2359 0.929681 23.7641 0.929682 23.4444 1.21096L13.7998 9.69577C13.198 10.2252 13.5628 11.2373 14.3555 11.2373H15.7471L16.9322 18.5356C17.0695 19.3806 17.7818 20 18.6165 20H23.1463V13.428C23.1463 13.186 23.3374 12.9899 23.5731 12.9899H24.4269C24.6626 12.9899 24.8537 13.186 24.8537 13.428V20H29.3835C30.2182 20 30.9305 19.3806 31.0678 18.5356L32.2529 11.2373H33.6445C34.4372 11.2373 34.802 10.2252 34.2002 9.69577L24.5556 1.21096Z" fill={props.color ?? 'white'} />
    </Svg>
  );
}

export const DiscoverIcon = (props: Icon) => {
  return (
    <Svg width="48" height="21" viewBox="0 0 49 21" fill="none" >
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 10.5C14.75 4.98606 19.2361 0.5 24.75 0.5C30.2639 0.5 34.75 4.98606 34.75 10.5C34.75 16.0139 30.2639 20.5 24.75 20.5C19.2361 20.5 14.75 16.0139 14.75 10.5ZM27.5476 11.5832L29.8014 5.94856C29.8294 5.87866 29.8363 5.80209 29.8211 5.72834C29.806 5.65459 29.7696 5.5869 29.7163 5.53367C29.6631 5.48043 29.5954 5.44399 29.5217 5.42886C29.4479 5.41373 29.3713 5.42058 29.3014 5.44856L23.6668 7.7024C23.2798 7.85716 22.9283 8.08892 22.6336 8.38363C22.3389 8.67834 22.1072 9.02985 21.9524 9.41683L19.6986 15.0514C19.6706 15.1213 19.6637 15.1979 19.6789 15.2717C19.694 15.3454 19.7304 15.4131 19.7837 15.4663C19.8369 15.5196 19.9046 15.556 19.9783 15.5711C20.0521 15.5863 20.1287 15.5794 20.1986 15.5514L25.8332 13.2976C26.2202 13.1428 26.5717 12.9111 26.8664 12.6164C27.1611 12.3217 27.3928 11.9702 27.5476 11.5832ZM25.9038 10.5C25.9038 11.1373 25.3873 11.6538 24.75 11.6538C24.1127 11.6538 23.5962 11.1373 23.5962 10.5C23.5962 9.86275 24.1127 9.34615 24.75 9.34615C25.3873 9.34615 25.9038 9.86275 25.9038 10.5Z" fill={props.color ?? 'white'} />
    </Svg>
  );
}

export const ActivityIcon = (props: Icon) => {
  return (
    <Svg width="19" height="21" viewBox="0 0 19 21" fill="none" >
      <Path d="M9.49121 20.7334C8.24902 20.7334 7.08008 20.4961 5.98438 20.0215C4.88867 19.5527 3.92188 18.8994 3.08398 18.0615C2.25195 17.2236 1.59863 16.2568 1.12402 15.1611C0.649414 14.0654 0.412109 12.8965 0.412109 11.6543C0.412109 10.4121 0.649414 9.24316 1.12402 8.14746C1.59863 7.05176 2.25195 6.08789 3.08398 5.25586C3.92188 4.41797 4.88574 3.76172 5.97559 3.28711C7.07129 2.8125 8.24023 2.5752 9.48242 2.5752C10.7305 2.5752 11.9023 2.8125 12.998 3.28711C14.0938 3.76172 15.0605 4.41797 15.8984 5.25586C16.7363 6.08789 17.3926 7.05176 17.8672 8.14746C18.3418 9.24316 18.5791 10.4121 18.5791 11.6543C18.5791 12.8965 18.3418 14.0654 17.8672 15.1611C17.3926 16.2568 16.7363 17.2236 15.8984 18.0615C15.0605 18.8994 14.0938 19.5527 12.998 20.0215C11.9023 20.4961 10.7334 20.7334 9.49121 20.7334ZM9.49121 13.1748C9.91309 13.1748 10.2705 13.0283 10.5635 12.7354C10.8564 12.4424 11.0029 12.085 11.0029 11.6631C11.0029 11.376 10.9297 11.1182 10.7832 10.8896C10.6367 10.6553 10.4346 10.4707 10.1768 10.3359V6.09082C10.1768 5.90332 10.1094 5.74512 9.97461 5.61621C9.8457 5.48145 9.68164 5.41406 9.48242 5.41406C9.29492 5.41406 9.13379 5.48145 8.99902 5.61621C8.86426 5.74512 8.79688 5.90332 8.79688 6.09082V10.3271C8.55078 10.4736 8.35449 10.6641 8.20801 10.8984C8.06152 11.127 7.98828 11.3818 7.98828 11.6631C7.98828 12.0791 8.13184 12.4365 8.41895 12.7354C8.71191 13.0283 9.06934 13.1748 9.49121 13.1748ZM8.47168 3.01465V1.74023C8.47168 1.45898 8.57129 1.21875 8.77051 1.01953C8.96973 0.814453 9.20996 0.711914 9.49121 0.711914C9.77246 0.711914 10.0098 0.814453 10.2031 1.01953C10.4023 1.21875 10.502 1.45898 10.502 1.74023V3.01465H8.47168ZM15.1162 5.04492L16.0479 4.13965C16.2646 3.92871 16.5254 3.82324 16.8301 3.82324C17.1055 3.82324 17.3369 3.91699 17.5244 4.10449C17.7119 4.29199 17.8057 4.52051 17.8057 4.79004C17.8057 5.07129 17.6914 5.32617 17.4629 5.55469L16.4873 6.53027L15.1162 5.04492Z" fill={props.color ?? 'white'} />
    </Svg>
  );
}

export const BookmarksIcon = (props: Icon) => {
  return (
    <Svg width="49" height="21" viewBox="0 0 49 21" fill="none" >
      <Path d="M15.75 2.98884C15.75 2.16657 16.4419 1.5 17.2955 1.5H31.2045C32.0581 1.5 32.75 2.16658 32.75 2.98884V18.7544C32.75 19.3418 32.0768 19.6978 31.5624 19.3824L24.6649 15.1539C24.4117 14.9987 24.0883 14.9987 23.8351 15.1539L16.9376 19.3824C16.4232 19.6978 15.75 19.3418 15.75 18.7544V2.98884Z" fill={props.color ?? 'white'} />
    </Svg>

  );
}

export const ProfileIcon = (props: Icon) => {
  return (
    <Svg width="20" height="19" viewBox="0 0 20 19" fill="none" >
      <Path d="M9.99121 18.7334C8.74902 18.7334 7.58008 18.4961 6.48438 18.0215C5.38867 17.5527 4.42188 16.8994 3.58398 16.0615C2.75195 15.2236 2.09863 14.2568 1.62402 13.1611C1.14941 12.0654 0.912109 10.8965 0.912109 9.6543C0.912109 8.41211 1.14941 7.24316 1.62402 6.14746C2.09863 5.05176 2.75195 4.08789 3.58398 3.25586C4.42188 2.41797 5.38574 1.76172 6.47559 1.28711C7.57129 0.8125 8.74023 0.575195 9.98242 0.575195C11.2305 0.575195 12.4023 0.8125 13.498 1.28711C14.5938 1.76172 15.5605 2.41797 16.3984 3.25586C17.2363 4.08789 17.8926 5.05176 18.3672 6.14746C18.8418 7.24316 19.0791 8.41211 19.0791 9.6543C19.0791 10.8965 18.8418 12.0654 18.3672 13.1611C17.8926 14.2568 17.2363 15.2236 16.3984 16.0615C15.5605 16.8994 14.5938 17.5527 13.498 18.0215C12.4023 18.4961 11.2334 18.7334 9.99121 18.7334ZM10 17.2393C10.6504 17.2393 11.3037 17.1514 11.96 16.9756C12.6221 16.7998 13.2461 16.5449 13.832 16.2109C14.418 15.877 14.9336 15.4727 15.3789 14.998C15.0449 14.4883 14.6025 14.0576 14.0518 13.7061C13.5068 13.3486 12.8887 13.0791 12.1973 12.8975C11.5117 12.71 10.7793 12.6162 10 12.6162C9.20312 12.6162 8.45898 12.71 7.76758 12.8975C7.07617 13.085 6.46094 13.3574 5.92188 13.7148C5.38281 14.0664 4.94629 14.4941 4.6123 14.998C5.05176 15.4727 5.56445 15.877 6.15039 16.2109C6.74219 16.5449 7.36621 16.7998 8.02246 16.9756C8.67871 17.1514 9.33789 17.2393 10 17.2393ZM10 11.0957C10.5684 11.1016 11.084 10.958 11.5469 10.665C12.0098 10.3662 12.376 9.96484 12.6455 9.46094C12.915 8.95117 13.0498 8.37988 13.0498 7.74707C13.0498 7.14941 12.9121 6.60156 12.6367 6.10352C12.3672 5.60547 12.001 5.20703 11.5381 4.9082C11.0752 4.60352 10.5625 4.45117 10 4.45117C9.42578 4.45117 8.90723 4.60352 8.44434 4.9082C7.98145 5.20703 7.6123 5.60547 7.33691 6.10352C7.06738 6.60156 6.93555 7.14941 6.94141 7.74707C6.94141 8.37988 7.07617 8.94824 7.3457 9.45215C7.61523 9.95605 7.97852 10.3545 8.43555 10.6475C8.89844 10.9404 9.41992 11.0898 10 11.0957Z" fill={props.color ?? 'white'} />
    </Svg>
  );
}


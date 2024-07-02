import sample from "../assets/sample.png";
const Player = () => {
  return (
    <div className="flex flex-col gap-4 w-[35%] max-w-[500px]">
      <div className="">
        <h2 className="text-3xl font-semibold">Blank Space</h2>
        <p className="text-lg opacity-50 font-light">Taylow Swift</p>
      </div>

      <div className="w-full h-auto">
        <img src={sample} alt="" className=" object-contain" />
      </div>

      <div className="flex flex-col items-center gap-6 m-auto w-full">
        <div className="bg-white/20 h-2 w-full rounded-full">
          <div className="bg-white z-20 h-2 rounded-full w-12"></div>
        </div>
        <div className="flex w-full justify-between items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.1" />
            <path
              d="M19.2 24C19.2 24.6365 18.9471 25.2469 18.497 25.697C18.047 26.1471 17.4365 26.4 16.8 26.4C16.1635 26.4 15.553 26.1471 15.1029 25.697C14.6529 25.2469 14.4 24.6365 14.4 24C14.4 23.3635 14.6529 22.753 15.1029 22.3029C15.553 21.8528 16.1635 21.6 16.8 21.6C17.4365 21.6 18.047 21.8528 18.497 22.3029C18.9471 22.753 19.2 23.3635 19.2 24ZM26.4 24C26.4 24.6365 26.1471 25.2469 25.697 25.697C25.247 26.1471 24.6365 26.4 24 26.4C23.3635 26.4 22.753 26.1471 22.3029 25.697C21.8529 25.2469 21.6 24.6365 21.6 24C21.6 23.3635 21.8529 22.753 22.3029 22.3029C22.753 21.8528 23.3635 21.6 24 21.6C24.6365 21.6 25.247 21.8528 25.697 22.3029C26.1471 22.753 26.4 23.3635 26.4 24ZM31.2 26.4C31.8365 26.4 32.447 26.1471 32.897 25.697C33.3471 25.2469 33.6 24.6365 33.6 24C33.6 23.3635 33.3471 22.753 32.897 22.3029C32.447 21.8528 31.8365 21.6 31.2 21.6C30.5635 21.6 29.953 21.8528 29.5029 22.3029C29.0528 22.753 28.8 23.3635 28.8 24C28.8 24.6365 29.0528 25.2469 29.5029 25.697C29.953 26.1471 30.5635 26.4 31.2 26.4Z"
              fill="white"
            />
          </svg>
          <div className="flex gap-4 items-center">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <path
                  d="M24.712 8.38937C24.9529 8.2286 25.233 8.13627 25.5224 8.12222C25.8117 8.10816 26.0994 8.17292 26.3548 8.30957C26.6102 8.44623 26.8237 8.64966 26.9726 8.89816C27.1214 9.14665 27.2 9.4309 27.2 9.72057V22.5206C27.2 22.8102 27.1214 23.0945 26.9726 23.343C26.8237 23.5915 26.6102 23.7949 26.3548 23.9316C26.0994 24.0682 25.8117 24.133 25.5224 24.1189C25.233 24.1049 24.9529 24.0125 24.712 23.8518L16 18.0438V22.5206C16 22.8102 15.9214 23.0945 15.7726 23.343C15.6237 23.5915 15.4102 23.7949 15.1548 23.9316C14.8994 24.0682 14.6117 24.133 14.3224 24.1189C14.033 24.1049 13.7529 24.0125 13.512 23.8518L3.91198 17.4518C3.69285 17.3056 3.51318 17.1077 3.38891 16.8755C3.26465 16.6433 3.19963 16.3839 3.19963 16.1206C3.19963 15.8572 3.26465 15.5979 3.38891 15.3657C3.51318 15.1334 3.69285 14.9355 3.91198 14.7894L13.512 8.38937C13.7529 8.2286 14.033 8.13627 14.3224 8.12222C14.6117 8.10816 14.8994 8.17292 15.1548 8.30957C15.4102 8.44623 15.6237 8.64966 15.7726 8.89816C15.9214 9.14665 16 9.4309 16 9.72057V14.1974L24.712 8.38937Z"
                  fill="white"
                />
              </g>
            </svg>
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_39)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 48.1205C30.3652 48.1205 36.4697 45.5919 40.9706 41.091C45.4714 36.5902 48 30.4857 48 24.1205C48 17.7553 45.4714 11.6508 40.9706 7.14992C36.4697 2.64905 30.3652 0.120483 24 0.120483C17.6348 0.120483 11.5303 2.64905 7.02944 7.14992C2.52856 11.6508 0 17.7553 0 24.1205C0 30.4857 2.52856 36.5902 7.02944 41.091C11.5303 45.5919 17.6348 48.1205 24 48.1205ZM22.665 15.6245C22.2132 15.323 21.688 15.1499 21.1455 15.1236C20.6031 15.0972 20.0636 15.2186 19.5847 15.4749C19.1058 15.7311 18.7055 16.1125 18.4264 16.5785C18.1473 17.0444 17.9999 17.5774 18 18.1205V30.1205C17.9999 30.6636 18.1473 31.1966 18.4264 31.6625C18.7055 32.1284 19.1058 32.5099 19.5847 32.7661C20.0636 33.0223 20.6031 33.1437 21.1455 33.1174C21.688 33.091 22.2132 32.9179 22.665 32.6165L31.665 26.6165C32.0759 26.3425 32.4128 25.9714 32.6458 25.5359C32.8788 25.1005 33.0007 24.6143 33.0007 24.1205C33.0007 23.6266 32.8788 23.1404 32.6458 22.705C32.4128 22.2696 32.0759 21.8985 31.665 21.6245L22.665 15.6245Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_39">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.120483)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <path
                  d="M7.28802 8.38937C7.04706 8.2286 6.76697 8.13627 6.47764 8.12222C6.18832 8.10816 5.9006 8.17292 5.64519 8.30957C5.38979 8.44623 5.17627 8.64966 5.02742 8.89816C4.87857 9.14665 4.79997 9.4309 4.80002 9.72057V22.5206C4.79997 22.8102 4.87857 23.0945 5.02742 23.343C5.17627 23.5915 5.38979 23.7949 5.64519 23.9316C5.9006 24.0682 6.18832 24.133 6.47764 24.1189C6.76697 24.1049 7.04706 24.0125 7.28802 23.8518L16 18.0438V22.5206C16 22.8102 16.0786 23.0945 16.2274 23.343C16.3763 23.5915 16.5898 23.7949 16.8452 23.9316C17.1006 24.0682 17.3883 24.133 17.6776 24.1189C17.967 24.1049 18.2471 24.0125 18.488 23.8518L28.088 17.4518C28.3071 17.3056 28.4868 17.1077 28.6111 16.8755C28.7354 16.6433 28.8004 16.3839 28.8004 16.1206C28.8004 15.8572 28.7354 15.5979 28.6111 15.3657C28.4868 15.1334 28.3071 14.9355 28.088 14.7894L18.488 8.38937C18.2471 8.2286 17.967 8.13627 17.6776 8.12222C17.3883 8.10816 17.1006 8.17292 16.8452 8.30957C16.5898 8.44623 16.3763 8.64966 16.2274 8.89816C16.0786 9.14665 16 9.4309 16 9.72057V14.1974L7.28802 8.38937Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="24"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.3144 16.4782C23.5174 16.5605 23.6909 16.6999 23.8129 16.8788C23.935 17.0576 24.0001 17.2678 24 17.4828V30.5303C24 30.7453 23.9348 30.9555 23.8127 31.1342C23.6906 31.313 23.5171 31.4523 23.3141 31.5346C23.1111 31.6169 22.8877 31.6384 22.6722 31.5965C22.4567 31.5545 22.2587 31.451 22.1033 31.299L17.9844 27.2684H15.1111C14.8164 27.2684 14.5338 27.1539 14.3254 26.95C14.1171 26.7461 14 26.4695 14 26.1811V21.832C14 21.5436 14.1171 21.2671 14.3254 21.0632C14.5338 20.8593 14.8164 20.7447 15.1111 20.7447H17.9844L22.1033 16.7141C22.2587 16.562 22.4567 16.4583 22.6723 16.4163C22.8879 16.3743 23.1114 16.3959 23.3144 16.4782ZM29.1744 16.3183C29.3828 16.1145 29.6654 16 29.96 16C30.2546 16 30.5372 16.1145 30.7456 16.3183C31.7787 17.327 32.598 18.5254 33.1565 19.8448C33.715 21.1641 34.0017 22.5785 34 24.0066C34.0017 25.4347 33.715 26.849 33.1565 28.1684C32.598 29.4877 31.7787 30.6862 30.7456 31.6948C30.536 31.8928 30.2553 32.0024 29.964 32C29.6727 31.9975 29.394 31.8831 29.188 31.6815C28.982 31.4799 28.8651 31.2072 28.8626 30.9222C28.86 30.6371 28.972 30.3624 29.1744 30.1574C30.0013 29.3507 30.6569 28.3919 31.1037 27.3363C31.5505 26.2807 31.7796 25.1491 31.7778 24.0066C31.7778 21.6037 30.7844 19.4313 29.1744 17.8558C28.9661 17.6519 28.8491 17.3754 28.8491 17.0871C28.8491 16.7987 28.9661 16.5222 29.1744 16.3183ZM26.0311 19.3932C26.1343 19.2921 26.2568 19.2119 26.3917 19.1572C26.5266 19.1025 26.6712 19.0743 26.8172 19.0743C26.9632 19.0743 27.1078 19.1025 27.2427 19.1572C27.3776 19.2119 27.5001 19.2921 27.6033 19.3932C28.2232 19.9985 28.7148 20.7176 29.0498 21.5093C29.3848 22.301 29.5567 23.1497 29.5556 24.0066C29.5566 24.8635 29.3847 25.7121 29.0497 26.5038C28.7147 27.2955 28.2232 28.0146 27.6033 28.6199C27.3948 28.824 27.1121 28.9386 26.8172 28.9386C26.5224 28.9386 26.2396 28.824 26.0311 28.6199C25.8226 28.4159 25.7055 28.1392 25.7055 27.8507C25.7055 27.5621 25.8226 27.2854 26.0311 27.0814C26.4446 26.6782 26.7726 26.199 26.9961 25.6713C27.2196 25.1436 27.3342 24.5778 27.3333 24.0066C27.3342 23.4353 27.2196 22.8695 26.9962 22.3418C26.7727 21.8141 26.4447 21.3349 26.0311 20.9317C25.9278 20.8307 25.8458 20.7108 25.7899 20.5788C25.734 20.4468 25.7052 20.3053 25.7052 20.1625C25.7052 20.0196 25.734 19.8781 25.7899 19.7461C25.8458 19.6141 25.9278 19.4942 26.0311 19.3932Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Player;

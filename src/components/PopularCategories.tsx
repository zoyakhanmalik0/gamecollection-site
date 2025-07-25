import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Game Guides",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnhPitCAzkhfGxqJWocgBm5-WduWtQ8fOUWZmNIoxXF4lKXwOp", // New relevant image
      path: "/game-guides"
    },
    {
      id: 2,
      title: "Game Reviews",
      image: "https://cdn.thedailymash.co.uk/wp-content/uploads/20190809100812/cards.jpg", // New relevant image
      path: "/GameReviewpage"
    },
    {
      id: 3,
      title: "Tips & Tricks",
      image: "https://i.ytimg.com/vi/SGgFQLpmANc/mqdefault.jpg", // New relevant image
      path: "/tippage"
    },
    {
      id: 4,
      title: "Trending Games",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFRUXFxgXFRcXFhUXFhcVFRUWFxcWFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8lICUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABFEAACAQIFAQYDBQYCBwkBAAABAgADEQQFEiExQQYTIlFhcYGRoRQyUrHRFSNCweHwYvEzcoKSk7LSF1NUg4Sis8LDFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EADARAAICAQMDAgUCBgMAAAAAAAABAhEDEiExBBNRFEEiMmGR8HGBI0JSwdHhBUOh/9oADAMBAAIRAxEAPwDz+th7RKVA8y+KgPMkq1QFsBJ1M30rkH16RIEipYY3v5STxExSCNpp7UY8uzQ5VjbFWO+k7+09Ky3FYdgHBW/wnjeX1rEgw5gbeZmE4jTPScf2jRBZd5So9r6VrmmS/wAJlHXaXcDl4A1NM6HYfqY9qzIDtc3t5CHaQ0eIEwFkVDVULdBsIdr8WHMRRHmWBw+JUoaSsTySo2+M8j7X5E2GYpY6L3U/yv5z2zLMPoG/J5jc3yqniabU3ANxKi2nY3xR806I+jh2YgKLmaPPuzFXDVigRnXlWCk7eRsOZTyuv3NYFlO3II3HrYzq12tjFpo2PY7supANVR7H+fzhztL2Xw/dkqig22IAEZk+IFSnemdzM52sxOJU6C7afnt8ph3dUqJWBqOoFZBklQ1NnKi/TynqmATRT8TEm080yp66rqQ/HaXMZ2oxSLY6f93+s3yQlJbPY5seRQyNyjv5r+5D26x5apoB2hTsr2bpPSDvY36eUyOGLVn1tuZpMDmVSmNCW+M6cWN6Tz+t6hRmk1t7lPtnkFOmfD1+kxeFwpc2E0uf42o5JY78ew9JSypQm5FxHKPxUadNnlHC5L9kQ08jNrnyvt6wdjcJoM0tfODwi2HrM7mFcsd5M1FLY36WeeTvJwJldIs4tPQcHWWnSsebTzvCYkobiXa+auwsDt7SYTp0+B9Z0jzU4vdDs9cE7QPJqrk7mTUsPcXkyduzow4+1jUfBVAihJPU2kuHp3lUOWSlZU0RadAsQB1hB6UrvsQRzHpIWa+CFqBBnSy1ZjufyH6TpFGikx1FWY2UXMLvk2ICau7uPQi8DYfGlGuBNDS7Xtp0lTMWn7HQ2A6aVAT4DIsRVYHcGaCl2gQndJFjcXSbfSflDVvwSrM93pG+8KZZmI4Mq4yujbKJTo0/EAJTSaA9Cyte8ItwOYaxBOyLzM7l2U1kpioh+HnD/Z3H02b96dLDkGcrKo1mV4YUqYvzaJTxdnvyJXx+aoRZWBkGWYhC2lza8kYWbMwdgI/D1LG95Yp4ej0t85NppDqI6GKqK/Kg+4grPezeHrrpZBqtsRsR7HpL1bNKa7LuYmDqFjqMLQzyhc0OAqtQYagp2PHhI2/v0l3GZrRxAu1/IDzvPScRkGGqNrekjN5lQTKeb9ksPWpldAU9CuxB9LQcVdjjNpUefYGkqghTt6iJneHQ0iwIv1gzNKGIw7NTZWAU2DaTYjob8QVicQ7La/MqCld2dWVQ7eyLXZtFZiJp6mUDkGYfLcSaRvCTdp34ndraSaPFfTRyNqbKXaAaWIlHDVDaSZhi+8N5WpMRwIpTcnaLw9PHDjUZCuTvKVY7y+H24lGtzEjZ0uCMS5TpXEqgS3Tq2EGCRHWpWlrC1NrSrWqXiK20l7j4FrDeWMvAvvKg5kha3E0fBj7hbHsgHhgl2F4x6pPWRXij8Kobim7LRadIrzoWGhEMephqp2dqhdRHwg8UOnWZqcXwdDxyjyQ0TvCNNri0WjlTtuJbo5FW5C3kSnHyUscvAIfCNfYREw7gg2mrwmSVrboZOciq3BCn6TN50X2SCj2melTCsvSZ+tnBL6oYzrJ63AQwKMlq3+4flCDxtWS4TXCDOXZqrdbH3hhXJ63mUGSVPLeX8K1eh94XWROMX8rKjGa5Rr8DSqHhiPjC2HVwbNeZnLM9R7AnSZoaGZX2PHnMuOQdsP4fDqfWFMPT0rBmU79bwwxsN5aIZYoG4kjmZ6pmhU+GC8ZnFVm5sB5R60Cg2bFqKOLMAR6iZvM+wmFqsW0lCedJt9BtC2Crk0wTzaT4XE3JB5EaYraMX/2dUKZ1feH+LeQZl2GoOPCAp9AB+U32N+4Zn62PC/eEznKSfJ04qa4R5ZjexNdWIQhhBeKyutRF6iEDz6T1ejigzFk+Ig3tVh2rUGCWv5GVDPK9x5MEWjzjBUjU8KC58v8AOUc0y6pTPjplfl/KTYDHvhqhuu45Eu5x2lFcWKWNrcidkVvZ582+KM8i3NhCa5RVIuF29xB9CrpcGavD59SC7tv8Z24MWOaep0eb13U9Ria7Ub/azL4igymzC0iBhLNccrtcQaZjljGMqi7OvpsuTJBOapnaopMYRFAmZuITEvFtEAhYEpM6IZ0APSsu7RU650NteD+0fZy16tPcckCZGuTTa67TTZJnlTQRU3FpxPG4fFE71lU1UizktXwH28oXy3Gm1rXmRTMSpawsCYWyjMQPvTDLje7Iw5FfJvsLUuo2k526SnQzGmEHiiYjNaf4vrOY6S3VCnkSliggBOmQnN6fVh84PxmdUtJF4U2Fpe5msZnNqpAXaJis01LusEYuqDUJHF5LWq3Fp6MMUaWxw5s89VJg56o17bQ9h8zKAAm4mbKnVL9U7CaTinQ8ctj0TIO0ApkdR5QhmXaQtsBYTyvEYkgCxIhzs5UZz4jec8sbS5NNUb3RrqONLDiR4qsVIv7ypQxOmppkWb4oBrzOmUpRs0dHP/CIXw+KGzX3MweBxdL+M2hOtnqDZTtGpNcilBN/CarPM1WnRJJ5mYOdIwttMr2ozh6pCpwICBq+svRq3KxzjDZmyxTVaTCsm69RCLZtSqUwVOlxz/P3EyGX542ko+4tvB/feXU7Rdt8M31p7lLtEv74k9YMZIUzDCu7XlYYBp245JJJnm5U9TaKDiNl18A0b9iaXqRmkyoJLaWBgW5jWomK0y9LRXvFvFakZ3cmOyaY0NEHMcaRiLTMAoUzpxE6MRqszy82WqUOgnYyxhKItxYSxj8yqVKCU7ABbfG2wjMGjdZxW63Ky5b2RM2AQ9I9MtTpJ+7NpIlEyLOW2VzgCf4j84v7Gv8AxH5y4KZl/KMKXex4AvE5UOLlJ0gEchPn9TK7ZCZt/s41MPLaUTUF7SVlZu8MvJkWyMiRtlDTdnDqSBGPhgCRGs7F2J+TBHKDHDK2M1L1BexEs0cEpYfSN5wWPJ7GPqZGx6S5luCqUzsp+E0WPpMPB8jAtPEvTezXi7raO7D0in/MP1Pr1FT8ouYUXq7gS5mVEsoZTYny6e8bl61ALOQRFHJFq2GboMkfldlHBZKam2q0lxHZxxwQfpJqqMja6Z28hH4XMWrNpJKniPVe6IWDywFWy9kO4jGpG200+LwopbuSfexlrL88wttLkKfWUpN+xnPA4u9R5pUVlJuD8ocyjEU3pFHp+IcNYzaYl8NYuoV/ax5j8vxNFhsn0EqWRVTRr28k43DgwhUxCk2Wad1U8KLv7QGMsIO4uJKyROeeHPDmwM1GNOFvNnh8sw7Lva/vBOIwao9gbiNTRnLWuWADhTIKmXkzTVMMhG0qnBk8RxyITlPyAFyxjwCfaSjLKlwChF9rkGazIF0E6l36Xl3NM17oXen4eLx9xt0jfG5JWzA5jgdFrb39JSq0mA4mrxGOw9TxdfeRVsOGXZdvOWnKPIu/FvijJdyTEh8U1G150vWGqIwZh4bAbxFzRh0k2XZ1g3dji8OyauGw50hSSd9BNrcecvJg8G9zSxakdEqroqc2G/DG3kJDSXKIljbe25TpZ2wlpO0LdRG4nC0031owvbZlJuPQE+R4jRQpniT8PgxlHTyi1S7QjqJoOzWfJao7CwA/rMn9lSaE4BKeBDfxVDt7E/oJllUapGnTpar8F3D9oqZV2PmTBpzyneRUsvX7NqtuWt9YK+xC8mMY7m8m9v0Na+c0rI1+ov8AKXMXi6YAqah6zNDLFOHZuqm/5GEKGTI9IePpIaihqTf2JMzr07ggjedl+MDeEn2Mr4TKVdGXlk/LpKiYTSesdRaonVK7Rp6brVBpts43B8/IiBcfg1e6t4XX+/kZbpYfvF1KbVF4/vyk37NGKS4Omsn92PoZC2Zrd71/sF5XiNDaKh24v5QquC/eXR9Sddxt7QK2XNUBS+movIMrYVK9K9Nnsp5Ft4OK5s9HDmhkpRiw5icIFu9NrjyvKL1EBuRpaW6WWu1MLR2N+THNlig6Kg1VLdOJCflmkscf5Y7gz9v0lJ71bnobEzHZy/eVNSjY8CbTDVcMumnUo1KtRmZRofVqAbSDo8JHiDrY7+A72IlmiuWGoaYRr3I16m7uw/jvvZfUz0MWFw+JI8bN10cj0SfuZfIcT3QtUBsbbTSYLMVNzTU+u9pG+PyxzcMw0KW8XUCw0jzJvxIMRnuECnu6dQg2vsBbVq433PhB/wBoScmGU3uisfVxxwemTr9AthsToViQCx+PtaWMPSPdd6xFz0/rKeCxuEVxR/eBr7O2yEMLq3B8O/PUS25oVF1J3gBuVBuAbG1rc352NuPhMn0k72OiP/K4HH+Jf1JKWBYjUdhzxBP2zCFmDuVK8+8Np9oFIaAWuDcbbAX8zfy2sfeYfNezWKDEmm1iw32tbnz95eHDJSakjm6nJ084KUH+fuHXOFNtNYEkXnNSK8bzIUsPVV7lWGpgBcEXt5XG89EwmWV3UX0jYecM0NNUYYoXumBcV9o2KUifbeUcyXFOmmpSYDz0ma6ljTRfu3O49Nj7SarngIFyN/8AD5SIOjocWeZ90F2tY7bEfSSUq76bX8M1Gb5LUqt3oQFSNrEA/IwbSwGhvGht7GbSyWjCK0sAta86XcRhiWJUbX2nR6yNJj51okconUahXJMsFYVCamgouoDbe3PMrUsY6m2xlrHYSmiqUqhiUViOoYncQetjybTJfFb9jWSpJBKnm5HP6zTU+1VOrSSlVBGgWVl+XEwTDfaNBilhjIiLUfY9VwGOotT7vvlIvcXFm/veSLgkP3XvPM8DWdWB5Fxt5jymxw9dSLgW9PL0nLPBp4YsuXSk6NCrFQyhQVYWINv1j8pRtQpkAKb+W3lM+1f1P1nJiW/EfmZHZfky9Wv6Q4gqUarMF1ci9+l9ow4QvufCSfSC1xJP8R+Zj9R/EfmYdp+SPVpewcwWC0MGDcedt45rrW73vET0G5PmDATI34r/ABkTMRyIdr6g+t8IMZ/jkqVQ9HYgbtxc/wA4mJripSZrhKiKTvazAdBq2+fF4H7yNxFchSebAmxAIYAHwsDyD5S+2tjOPVTUm/IVXtNXRagZaXgIdS9OpSBpX0+ELsxJZLdLAmWP/wCzfuRVWjSaxtU/eqgViToC3FzcAkzB4btCaZVxTPfgq2oM9gioAq6b6eAOnAj07RqpVl74vZw96upLMNIIvfoT8bTv0R8Efxrt2aLGZ3TvTr9xSCsfE3eoGFRTqdRpW5sGUg9bwTTZHq1qNIBHKsqlHY6it7p4mAAZeTYDwi3MHrnA3VO+0lQKpaqSCyktZSOL6Rbz36SrhsUEqgOurYE3Y/eKi2rS33R4b9bXlC7T59yyrFsO6ppurB33F2Q2VSbtbwsRYc/vCekhouGqKzoe7KsG0qumzAL+7JFgQAu54N/SaZM/UU6btQ3JcGzDSrIR4VRtwLMp3PJ9IVx2ZYdagBwrvfS2vuyQwZQQ1y17C/n/AAxvkyhKSTVeDIUcIWL09ZOIRgKZWpq1GnsygswAVQuoG3QCSZcz37zvH1OppvUJsENcnSzvY7WLHa3HneaLMauHes1A4aqLAovgIBtdhpLOCoY8W/F6zL4jFGqWWnZV0tWI1I5uqkWLKRYAIbDe2o+cLQVPdIv5fjKgSpSFaoHcgqxqFU0Ug7MVYjYk245ka50zUGValUurGozGqgIpqoWwYrf7zfd9BKNfG1KilhSIpUtI0q1QhQx3ANurajv+LaQYrMtbioyP3SEU1W9iEAYquoDcgdTvEzSON8UG8BjKmIIC949qam71S2mom1wBZbkMRc3JsbcQguZYmhdmc7D7rfytBvZVHrVnJY964DEg86vEb8AW9Pxek1WY5bopE11LIPvNa9r9bjicGefx0e302jHguk2/bfb6gTD9uuO8oajySCOPjH0+11KoQBQ06jsTa3vKRyDB1T+5xFj0Un6C8uYLKUwpVjZip/jB0m/lFLtpbckwlKUkipm3amohamrcAW8pXxHbSvdgoUgqNO3HnJc7wNKtX71QEBAuoHJ8+kv08napQakMMrWHhqL95ffff5wUoJK0dE8Gbd6aXtsUaOeV2UNpTf2nQT+y3Xw95a3Sx2izSoeTD0/Uf0v7Gajw3pNjiOz+HTD0a6hmL6rg8eE2+ELUcXgDgzT+yDvA+zaUvuOr31dOJb6heCFgkecmr6RrMOk9YxHZXCnAqwogVCd3tva/5TI18gpC9zwbbeQiXUwYdiZk7yagOsWth7R9CnttyTYCbtqjJJ2HsBhkCUnV9VZzUJp7AKiK1jfzNtpZpOdI+P5yvglVcXpFiqpUXxbC4osDf43lnDrqQHznOyeq+VfqSLUkqNITTI/zElpjziPPZYpkdbiWKYHQyr6fzjNVj/WIigi3pz7Tg9xxB61iD/WTd/5n9YhUPq9NpGR0tHiqfUxe8uDt0vbcX9P8oxUZ3B0lNWgCuwVdZ8Nii6mqdV1C2pSN+CLmdldCm1RmK/ugrs4CNp0WOkHSb21FJYpsrGxF/uJqOpaWHqGpdvu+ErZX34Nyd45VR2vZe+aqzamsKDIoLEG673YDa1txO2tjR5JauGCsOgFKqSPCAoHh27wsNPJ50ipv7+cr1CpqJtfwi4Gnol7XsBbzAHTm+8tsE0XWldyGLBh4WDMFXuwBckXby+kqYf8A04Fu7Q3DAX2QE6xdr+Ib89bQZtB2v2DlCmHq90rKRVC95Ua1yVPeVHQtxwR62tGUlFa9PbSpLmsQrulCmpFtIb7o2OmMqJro03bwhR3dNRc6xrdqjAg7WLKDt1k+aoGqDEMAEdx+73FXulC76SoFiuwPBIgc9q/zgHNjCyFm2ZLnvdF2Zm0imhY8AaTYyLKcSftCuulLFbnZUXcnYAFQLenMt4qn+8L23qippVQddMPqXxoFAHhJNvLeDcow3eVGRbliLpawJZQSBckWFtR56CI6Ek4sNZY695UGhu5ZHJ192WWkL2cBvvOu1ud72lLCODTrBlugW9/AdL3AQgHqT4SQOCZZqg1aSspa9NAhUanJRSx7w9FQalW0hx9UsUxAY7aFYcsDTVRqNksqsRYX5sY3ZnCvYO9icM1W4ptpZad76tiNbAL4RYNuehNgu46kglVqVa5qmku1YGpe3wO/ymZyzFFHqsLnXpYG7C2q7EXFuDt5XEtHMjv4eed339995xZINzbOyOSoqN/n2L/7ApqwXuDcrrAL8r58y9gXZ3FI6VFjYVSbEDyNrzOvj79PQbt+sjOM/wAP1b9ZLg3yCyaXaf59g5jGoh2Ur3bKbc6kPsRwIrZ5iKRDC6joykFSPfj5wAcUOq/Vv1i08fpN0BHmLmx9xwYuyb+tytU5P8/Ut4jH94xdvvMbncDf2nSr+0afXDoT1ILj6A2E6V2/oX6/qF/2fn2Nb2fwuEdBRxGKqkKDpU6FAJ3NtKEn5mT4DJqNap3NLw0gblzu5I42sIDyc4RnNVsQwC3JApNfj1hfI+0uDp1f9KbE23pvz7KDOeSlfB1LSk9xuf5piKQOGoKjqDYMR4j8CwH0mTx643X3Z2diFCBUuSw6ab/OFcx7QYY1WdXZ/FqFkYf81pnM2zhKja/FcnglV245BY/Sa4oyv5f/AAicopbSBuOpuHIdgxUlbq2pdttj1Eu5KoGIo6vuhlc38l8R/KUqKu52FkuoPpqIUE33PMnq3WpU/wABZfkSs63xRzLmxaeKIqGp1Oo/7wN/zhvBm1JRbp/OZ2mNwPaaGkDpA9BImjDqflRMD6D5yVKsraY5bjpf5SKOIuKy+skBHUA/CV8Pfnj+ssGow8/e39ZJNHMoPSIKR6D6ica/nJA1+o9IAMNM9LfKKrHm35CK+Ittf5QJmFKoxJ1avQ3B+XEaVjUbG1wtNiWUW7waKewVlRizGpwTfXZTc7ah0lh6ekpTqDvGDVB9n3Xu3ewWzBjquSp2/DaUMPiaqd5dN3pimCpA2ul7jqSqn4mSU8TaiVCHvDUDaiqXCqu1nve92O3oJ1pqhTjKybQdk2qP3ZABVb0SjszKC77kBWJ2/igzEeOsiqdVyyKRa5Bay3CgKDvwL887S5iMRU7tAoXVdy5FOkGBawA1jc7An3JlSuKpqGoSzGwUG92AXTa/+6PjHqRcU63DWFCVMS7HS9KmrvY6SClNQibbckJx7yDDUteupV8a0qWkA35PgpJdG23Nx08MZTxdM1BSLaKDujMADTCvo08uDYKXYX4IBNoyjXD2w7VEAGuzDTZnt4dbG10uo3t1j9jNKV/f7/4K+IdjSes5u7MqKx52W7WOrbw6Ba24b0jMspataHw6ie7Zm0oCn3ixAsfCpA9TI/tTMoKuA1MKECCxPjJJNuWuR8B7RtA6aekodWssTpJsttgCOhJJI9BF7mzT0BQsalNjTstRE0uqBFHcIo1O5NizFrXHXykFetcGsirp1L3tKyikLG1MEE+PVZjxt8Y7M8cNVOoH1VNqlRiTYuTqA0kWFtgR6SGswFfw1L3H7xlOpSXU95oIXYeIgeUGyYRZawIAUgElSboT1UgeW3mPcGS6RKuAHgAa455tfck+45l7QPOc8uRye5AySNkkrgj/ADkVQGCCyJhGMY43kZB8pRQk6JrnRjHZZlNWoD3Jq/duQA6g7kWJ4PTr1kD5SyG1RlQ6rHVUAIIO9wLnb0BkdTM6xuO8YA8gEqNzfgSoymCUvdnd8PgsUaFLV42One5Qaj6WDW2vKvA2B55t0nXjQ0tIlsJ5MrPVQDjULDi5UFhf2teVkbwm/Uj+f6yzlNbT3jnlaThf9appp3+Acn4RtOkoAD35ubcgfrIb3LStEdI2I9xD+Fe6KfSUcNjUQWFJD6tdj/KTftdv4VpL7Ux+ZvIlb9hZMOtcl9TEjstx9Nr97UpodrXoVGv6+E7Qvrwn/jMOP/SYj+cz38GHo35BKtbrOL/3/ftLGYZjTTenXoVT+EYaov1dYPHaJv8Au6Pwpj+YhT8C9G/JOasYapPtIhn1T8NL/hL/ANMQZlVbbQp36U1G/kNKx0xrpH5JxUtHq/nOp/agL92bdP3QP1KSliq9fqpXptTA9hsgioH0j8ltlXyETu18vzgt2dTZiwPNjfr8Inft+M/WVRPpJeQmtMR2gDi8FCu//efnFFWpe+s/MmFB6SXkLGnIjhRBy4txyx+ZjTin41n5m8KYell5CRwwjTR94MbEP+M/MxgxTD+Nj8TKph6aXkJvh79SI4YMjf06wUcW/wCI/OLTxjA+JmYeWphf4wph6aXkLhPb5TlI8/nBFXHXNxcf7b9Pa0i+1H+2qfrDSxemfkNGr5iRO46XgoYsfhv/ALdT9Z32odVJ/wDMePSP0/1CWuMZfaD/ALSn4X/4p/6Y6m9M7ksvoajfmKRhVD7D8looP7E6UmqoD/GfUVTb/wCOdHQdh+Sky9ZFeTKZxFuk0NqOpVAOkdV3EgJiA7woL9gzluEqNh6rKg0oVZ3LWA2ICAHZmJN7c+GUe+9YtTMHNNaWolFJYLwNTcttyfUyKhiArAlFaxBs2qxt0O/EVD1E32g+cQ1T5mR1MSCSe7UXJNhqsLngC/AjO+/wj6/rCg1FpcQbEXO9o6niSDfa/rvKfejyH1/WOFUeQP8AvfyMNIaywa/tHNVINgQfUcfWVGqA9APa/wDMzlf1A+ENIay/TzKouyuw9jCeD7X4ymNK4mqBe9tV9zzz7naAu72uGX57yI1CIPH9BLKn7mwHb7Hf+Jf/ANv6StU7a40nUcTVuNx4rAH2G0zBqRO8i0IrWEq+ZVHOp6jMfNmJ2PTcyHvD5/WUu8ia49Iay4XPnHpibdL/ABMoa52uGkWsuvXJid4ZS1ztcNIay01SJ3krapaw2XVqn+jo1G/1UY/kIOlyFt8Hd4Lc7+387xhqx4wFW9tBv7i/5y/hOy2MqW0UGN+N0H5mLVFe4/iBmuIXhPMuzGMoG1XDup9LN/yEwVUouvKsPdSPzjTTE7O1TtUi1RVqW8vjY/nKomx+qdqjGq38vgAPyiLvsNzCgsfqnRz4dwbFGB8iLH5GdDYW4uqJ3vSS/Z28o9aBH8O8m0XTKhQzkpltvylmph3PSN+zsOLiOxaRj4JgSGBBBsQeQfaRtRA5Mv06Lkkvc36km8emEXkqb+W8nXRWiwaKBPAaNNIjm4hI0D0H1M44Vj0hrDtg9KY6k/SL3N/u3MIrgW/CJMcvY8fKGtAsbBSYXfc2Ee2FG9ibfCEjlr+kloZV+L6SXkXkpY/oDVy8WvrHtff5RtXAgC4Yn6fnDbZSpH3voJNRyanexqKvB8WsjcA28Knz+knu/UvtLwZgYU9LmOODPk02YyKjYXxlIegWsf8A85SxOUop8NZan+rr/wDsoj7xPZRnly66349CRf3laph9JF/zmibLR+KM/ZK+cayA8XgBjCjm8aKA9fT1h/8AZi8RXy9Db0FhDuIXaM6KQk+FwqNUVSbLfxHrbrb1hk5YnlEXLUBvH3ELtsWklGmwalbwsCmoai41cOOnlDnazHfZsUGooKZKq9rmysR0AtYQQmHUEMORb6Szm1U4ip3lTmwHwEwdOW/Bqk0tirnOKNRRWYKGdyxKiwvYXtH5Pn1am6spU2NwGUEXiPQBUKeBx8ZGmGVdwI0lVA27s9Q7N5jUxDNiKlOnqIC7KRsOOSZnc+z80q9a9M3ZdC2Y6V9dNt/6QRl+f16I0oRbyIvKGLxDVGLudybzFY3e/BbkvYF18FruxsfPhTBv2cE2AN5oil+Y1MOoNxzOqM2jFxTANTChTpYG/wBPnJzpX7uwtdSOdQ84XOGXkicuFTi0esnSH8J2nLIpqUaLtpF2ZSWNha5352nQMqAbCdMNES7ZUEdOnSyjoonToDFEcJ06IY9Y8Tp0QCiOWdOiGOEdOnRDEMjaLOjQmRmKkWdGIeJ06dEM4xpizoAIYk6dGISJFnQEIY0zp0YhhnCdOjEOnTp0AOaIZ06AmJeLOnQEf//Z", // New relevant image
      path: "/trending-games"
    }
  ];

  return (
    <div className="mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 shadow-lg"
            onClick={() => navigate(category.path)}
          >
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-square">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-bold text-xl sm:text-2xl">
                  {category.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-colors"
          onClick={() => navigate(0)}
        >
          Explore Them All
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;

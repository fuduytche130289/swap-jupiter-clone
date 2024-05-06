import ReactPaginate from 'react-paginate';
import React, {useEffect, useState} from 'react';

const iconArrowLeft = require('./assets/img/icon_arrow.svg')
const iconArrowRight = require('./assets/img/icon_arrow_right.svg')
const iconGoToLastPage = require('./assets/img/icon_go_last_page.svg')
const iconGoToFirstPage = require('./assets/img/icon_go_first_page.svg')

// @ts-ignore
const items = [...Array(33).keys()];

// @ts-ignore
function Items({currentItems}) {
    return (
        <div className="items">
            {currentItems && currentItems.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => (
                <div>
                    <h3>Item #{item}</h3>
                </div>
            ))}
        </div>
    );
}

// @ts-ignore
export default function PaginatedItems({itemsPerPage}) {
    const [currentPage, setCurrentPage] = useState(0); // Add this line
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        // @ts-ignore
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        setItemOffset(newOffset);
        setCurrentPage(event.selected);
    };

    const goToLastPage = () => {
        setCurrentPage(pageCount - 1); // Subtract 1 because page count is 1-indexed
    };

    const goToFirstPage = () => {
        setCurrentPage(0); // Set to 0 to go to the first page
    };

    return (
        <div className="text-black flex justify-center items-center">
            {/*<Items currentItems={currentItems}/>*/}
            <button onClick={goToFirstPage}>
                <img src={iconGoToFirstPage.default.src} alt="icon-first-page"/>
            </button>
            <ReactPaginate
                forcePage={currentPage}
                className="flex flex-row items-center justify-center"
                nextLabel={<img src={iconArrowRight.default.src} alt="icon-arrow-right"/>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel={<img src={iconArrowLeft.default.src} alt="icon-arrow-left"/>}
                pageClassName="page-item w-[40px] h-[40px]  flex justify-center items-center "
                pageLinkClassName="page-link"
                previousClassName="page-item mr-[8px] w-[40px] h-[40px]  flex justify-center items-center"
                previousLinkClassName="page-link"
                nextClassName="page-item ml-[8px] w-[40px] h-[40px]  flex justify-center items-center"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active text-white bg-black rounded-full"
                renderOnZeroPageCount={null}
            />
            <button onClick={goToLastPage}><img src={iconGoToLastPage.default.src} alt="icon-last-page"/></button>
        </div>
    );
}

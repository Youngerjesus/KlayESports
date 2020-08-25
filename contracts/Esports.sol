pragma solidity ^0.5.6;

import "./ERC721/ERC721.sol";
import "./ERC721/ERC721Enumerable.sol";

contract Esports is ERC721, ERC721Enumerable {

    event contractUploaded (uint256 indexed tokenId, bytes photo, string contractName, uint256 date);

    mapping (uint256 => data) private _list;

    struct Data {
        uint256 tokenId;                                     
        bytes photo;                           
        string contractName;                       
        uint256 timestamp;                     
    }

    function uploadContract(bytes memory photo, string memory contractName) public {
        uint256 tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        Data memory newData = data({
            tokenId : tokenId,
            photo : photo,
            contractName : contractName,
            timestamp : now
        });

        _list[tokenId] = newData;

        emit contractUploaded(tokenId, photo, contractName, now);
    }

    function transferFrom(address from, address to, uint256 tokenId) public {
        super.transferFrom(from, to, tokenId);
    }

    function getTotalContractCount () public view returns (uint) {
        return totalSupply();
    }

    function getContract (uint tokenId) public view
    returns(uint256, bytes memory, string memory, uint256) {
        require(_list[tokenId].tokenId != 0, "Contract does not exist");
        return (
            _list[tokenId].tokenId,
            _list[tokenId].photo,
            _list[tokenId].contractName,
            _list[tokenId].timestamp
        );
    }
}

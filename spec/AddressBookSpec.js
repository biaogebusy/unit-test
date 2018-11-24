/**
 * 用describe建立Address Book测试组
 */
describe('Address Book', function () {

  // 每一组测试可能包含相同的代码，可以放入到beforeEach()函数中
  // 每组测试在运行前线运行里面的代码
  beforeEach(function () {
    addressBook = new AddressBook();
    thisContact = new Contact();
  })
  // 用it一组测试要求
  it('should be able to add a contack', function () {
    addressBook.addContact(thisContact);
    // 测试获取第一个地址是否是传进来的实例
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  // 建立另一组测试要求
  it('should be able to delete a contact', function () {
    // 添加联系方式到通讯录
    addressBook.addContact(thisContact);
    // 删除指定通讯录
    addressBook.deleteContact(0);

    // 是否删除指定通讯录
    expect(addressBook.deleteContact(0)).not.toBeDefined();
  });
})
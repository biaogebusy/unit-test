/**
 * 用describe建立Address Book测试组
 */
describe('Address Book', function () {
  // 用it一组测试要求
  it('should be able to add a contack', function () {
    var addressBook = new AddressBook();
    var thisContact = new Contact();

    addressBook.addContact(thisContact);

    // 测试获取第一个地址是否是传进来的实例
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  // 建立另一组测试要求
  it('should be able to delete a contact', function () {
    var addressBook = new AddressBook();
    var thisContact = new Contact();

    // 添加联系方式到通讯录
    addressBook.addContact(thisContact);
    // 删除指定通讯录
    addressBook.deleteContact(0);

    // 是否删除指定通讯录
    expect(addressBook.deleteContact(0)).not.toBeDefined();
  });
})